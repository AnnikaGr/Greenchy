class UserModel {
	constructor(
		displayName = null,
		email = null,
		photoURL = null,
		uid = null,
		tripsModel = null
	) {
		//Set this.observers to an empty array [] first thing in the constructor .
		//It needs to be first because some code used in the constructor may already notify observers.
		this.displayName = displayName;
		this.email = email;
		this.photoURL = photoURL;
		this.uid = uid;
		this.tripsModel = tripsModel;
		this.loaded = false
	}

	reset() {
		this.displayName = null
		this.email = null
		this.photoURL = null
		this.uid = null
		this.tripsModel = null
		this.loaded = false
	}
}

export default UserModel;
