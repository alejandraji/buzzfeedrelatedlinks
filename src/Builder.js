import Links from './Links'; 
import Error from './Error'; 

const Builder = ({
  handleUrlLookup,
  onUrlChange,
  handleSave,
  handleEdit,
  deleteLink,
  setLabel,
  resetState,
  state
}) => {
  return (
    <div className="xs-col-5 xs-p1">
      <header className="md-mb4">
        <h2 className="xs-text-2 bold">Related Links Builder</h2>
      </header>
      <form>
        {state.error ? <Error error={state.error} /> : ""}
        <div className="xs-col-12">
          <label className="form-label clearfix">
            Label<span className="text-red">*</span>
          </label>
          <input value={state.label} type="text" className="text-input xs-col-12" onChange={e => setLabel(e.target.value)}></input>
          <p className="xs-text-6 text-gray-lightest xs-mt1">
            You can try something like "Olympic Highlights"
          </p>
        </div>

        <div className="xs-col-12 xs-my2">
          <label htmlFor="url" className="form-label">
            Article URL<span className="text-red">*</span>
          </label>

          <p className="md-mb1">3-4 links recommended.</p>
          {state.links.length ? <Links links={state.links}  deleteLink={ deleteLink} /> : ""}
          <div className="xs-flex xs-flex-justify-space-between">
            <input
              id="url"
              type="url"
              className="text-input col xs-col-9 xs-mr1"
              placeholder="https://www.buzzfeed.com/..."
              onChange={onUrlChange}
            ></input>
            <button
              type="button"
              className="button button--secondary xs-col-3"
              onClick={handleUrlLookup}
            >
              + Add Article
            </button>
          </div>
        </div>
        <footer className="xs-flex xs-flex-justify-end">
          <button type="button" className="button button--secondary" onClick={resetState}>
            Cancel
          </button>
          <button type="button" className="button xs-ml1" onClick={handleSave}>
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};

export default Builder;