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
			<article class="message is-info">
				<div class="message-header">
					<p>API Error</p>
				</div>
				<div class="message-body">
					An error occurred during your request. Please try again later. {promiseState.error}
				</div>
			</article>
		);
	else if (promiseState.promise && promiseState.data && !promiseState.error)
		return false;
	else throw "PromiseNoData if-statements invalid";
}

export default promiseNoData;
