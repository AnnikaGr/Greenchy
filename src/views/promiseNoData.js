function promiseNoData(promiseState) {
  if (!promiseState.promise) return <div> </div>;
  else if (promiseState.promise && !promiseState.data && !promiseState.error)
    return (
      <img
        class="spinner"
        src="https://cdn.dribbble.com/users/194846/screenshots/1452453/media/b9282275788d5860d4ba90a03db866ba.gif"
        alt="loading"
        width="350"
      />
    );
  else if (promiseState.promise && !promiseState.data && promiseState.error)
    return <div class="error-msg">{promiseState.error}</div>;
  else if (promiseState.promise && promiseState.data && !promiseState.error)
    return false;
  else throw "PromiseNoData if-statements invalid";
}

export default promiseNoData;
