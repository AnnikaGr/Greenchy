function promiseNoData(promiseState) {
  if (!promiseState.promise) return <div> </div>;
  else if (promiseState.promise && !promiseState.data && !promiseState.error)
    return (
      <div class="columns is-centered">
        <img
          class="spinner"
          src="https://cdn.dribbble.com/users/71309/screenshots/2499001/media/11fa7b87b5f4a5fa5153272db49e7079.gif"
          alt="loading"
          width="350"
        />
      </div>
    );
  else if (promiseState.promise && !promiseState.data && promiseState.error)
    return (
      <article class="message is-error mt-5">
        <div class="message-header">
          <p>Cannot calculate emissions yet</p>
        </div>
        <div class="message-body">{getMessageContent(promiseState.error)}</div>
      </article>
    );
  else if (promiseState.promise && promiseState.data && !promiseState.error)
    return false;
  else throw "PromiseNoData if-statements invalid";
}

function getMessageContent(errorCode) {
  if (errorCode === "Error: API problem400") {
    return "Please specify a valid distance and number of travellers.";
  } else {
    return "We are having an issue right now. Please try again later!";
  }
}

export default promiseNoData;
