
import './App.css';
import Preview from './Preview'; 
import Builder from './Builder';
import { useState } from 'react';

const sampleData = [
  {
    id: "5764837",
    title:
      "Here Are The Best Celebrity Reactions As A Long, Stressful Election Night Unfolded",
    author: "Ellie Woodward",
    published: "1604488982",
    thumbnail:
      "https://img.buzzfeed.com/buzzfeed-static/static/2020-11/4/15/campaign_images/7614a2480210/here-are-the-best-celebrity-reactions-as-a-long-s-2-3257-1604502359-6_dblbig.jpg",
    url:
      "https://www.buzzfeed.com/elliewoodward/celebrity-reactions-2020-presidential-election-night"
  },
  {
    id: "5764836",
    title:
      "Bernie Sanders Explained Exactly What Would Happen On Election Night A Week Ago And The Clip Is Going Viral",
    author: "Ellie Bate",
    published: "1604487867",
    thumbnail:
      "https://img.buzzfeed.com/buzzfeed-static/static/2020-11/4/14/campaign_images/87e13b82e690/bernie-sanders-explained-exactly-what-would-happe-2-3170-1604500517-12_dblbig.jpg",
    url:
      "https://www.buzzfeed.com/eleanorbate/bernie-sanders-election-night-explanation-video"
  },
  {
    id: "5761607",
    title:
      "Stay Tuned: It’ll Take A Little Longer To Find Out Who Won The 2020 Election",
    author: "Clarissa-Jan Lim",
    published: "1604445590",
    thumbnail:
      "https://img.buzzfeed.com/buzzfeed-static/static/2020-11/7/17/campaign_images/cd46d45638ee/updates-joe-biden-has-won-the-presidential-electi-2-8869-1604769603-23_dblbig.jpg",
    url:
      "https://www.buzzfeednews.com/article/clarissajanlim/us-election-2020-updates-recap"
  }
];
const getBuzzDataByUrl = (url) => {
  const hasData = sampleData.length;
  if (!url || !hasData) {
    const status = !url ? 500 : 404;
    return {
      body: "",
      json: () => {
        return "";
      },
      status: status,
      ok: false
    };
  }
  const data = sampleData.pop();
  return {
    body: JSON.stringify(data),
    json: () => {
      return data;
    },
    status: 201,
    ok: true
  };
};

const initialState = {
  label: "",
  links: [],
  lookupUrl: "",
  mode: "builder",
  error: null
};

 
const App = () => {
  const [state, setState] = useState(initialState);

  const handleUrlLookup = () => {
    const response = getBuzzDataByUrl(state.lookupUrl);
    setState({
      ...state,
      links: [...state.links, response.json()]
    });
  };
  const deleteLink = (linkToDelete) => {
    const links = state.links.filter(link => link.id != linkToDelete.id)
    setState({
      ...state,
      links
    })
  }

  const setLookupUrl = lookupUrl => setState({ ...state, lookupUrl });

  const onUrlChange = (e) => {
    setLookupUrl(e.target.value);
  };
  const setLabel = label => setState({...state, label});
  const setError = error => setState({...state, error});
  const resetState = () => setState(initialState); 

  const handleSave = () => {
    const errorMessages = [];
    if (state.label.length === 0) {
      errorMessages.push("Set Label");
    }
    
    if (state.links.length === 0) {
      errorMessages.push("Add at least one Link");
    }

    if (errorMessages.length !== 0) {
      setError(errorMessages.join(", "));
    } else {
      setState({ ...state, mode: "preview", error: null });
    }
  };

  const handleEdit = () => {
    setState({ ...state, mode: "builder" });
  };
  

  return (
    <div className="lg-flex lg-flex-justify-center xs-py1 xs-px1 lg-px0">
      {state.mode === "builder" ? (
        <Builder
          state={state}
          handleUrlLookup={handleUrlLookup}
          onUrlChange={onUrlChange}
          handleSave={handleSave}
          deleteLink={deleteLink}
          setLabel={setLabel}
          resetState={resetState}
        />
      ) : (
        <Preview state={state} handleEdit={handleEdit} />
      )}
    </div>
  );
};


export default App;



