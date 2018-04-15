import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthService {
	private user: firebase.User;
	firedata = firebase.database().ref('/users');
	
	constructor(public afAuth: AngularFireAuth) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}

	signUp(newuser) {
		var promise = new Promise((resolve, reject) => {
			this.afAuth.auth.createUserWithEmailAndPassword(newuser.email, newuser.password).then(() => {
			  this.afAuth.auth.currentUser.updateProfile({
				displayName: newuser.displayName,
				photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
			  }).then(() => {
				this.firedata.child(this.afAuth.auth.currentUser.uid).set({
				  uid: this.afAuth.auth.currentUser.uid,
				  displayName: newuser.displayName,
				  photoURL: 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e'
				}).then(() => {
				  resolve({ success: true });
				  }).catch((err) => {
					reject(err);
				})
				}).catch((err) => {
				  reject(err);
			  })
			}).catch((err) => {
			  reject(err);
			})
		  })
		  return promise;
	}

	get authenticated(): boolean {
		return this.user !== null;
	}

	getEmail() {
		return this.user && this.user.email;
	}

	signOut(): Promise<void> {
		return this.afAuth.auth.signOut();
	}

	signInWithGoogle() {
		console.log('Sign in with google');
		return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
	}

	private oauthSignIn(provider: AuthProvider) {
		if (!(<any>window).cordova) {
			return this.afAuth.auth.signInWithPopup(provider);
		} else {
			return this.afAuth.auth.signInWithRedirect(provider)
			.then(() => {
				return this.afAuth.auth.getRedirectResult().then( result => {
					// This gives you a Google Access Token.
					// You can use it to access the Google API.
					let token = result.credential.accessToken;
					// The signed-in user info.
					let user = result.user;
					console.log(token, user);
				}).catch(function(error) {
					// Handle Errors here.
					alert(error.message);
				});
			});
		}
	}


	passwordreset(email) {
		var promise = new Promise((resolve, reject) => {
		  firebase.auth().sendPasswordResetEmail(email).then(() => {
			resolve({ success: true });
		  }).catch((err) => {
			reject(err);
		  })
		})
		return promise;
	  }
	
	  /*
	  
	  For updating the users collection and the firebase users list with
	  the imageurl of the profile picture stored in firebase storage.
	  Called from - profilepic.ts
	  Inputs - Url of the image stored in firebase.
	  OUtputs - Promise.
	  
	  */
	
	  updateimage(imageurl) {
		  var promise = new Promise((resolve, reject) => {
			  this.afAuth.auth.currentUser.updateProfile({
				  displayName: this.afAuth.auth.currentUser.displayName,
				  photoURL: imageurl      
			  }).then(() => {
				  firebase.database().ref('/users/' + firebase.auth().currentUser.uid).update({
				  displayName: this.afAuth.auth.currentUser.displayName,
				  photoURL: imageurl,
				  uid: firebase.auth().currentUser.uid
				  }).then(() => {
					  resolve({ success: true });
					  }).catch((err) => {
						  reject(err);
					  })
			  }).catch((err) => {
					reject(err);
				 })  
		  })
		  return promise;
	  }
	
	  getuserdetails() {
		var promise = new Promise((resolve, reject) => {
		this.firedata.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
		  resolve(snapshot.val());
		}).catch((err) => {
		  reject(err);
		  })
		})
		return promise;
	  }
	
	  updatedisplayname(newname) {
		var promise = new Promise((resolve, reject) => {
		  this.afAuth.auth.currentUser.updateProfile({
		  displayName: newname,
		  photoURL: this.afAuth.auth.currentUser.photoURL
		}).then(() => {
		  this.firedata.child(firebase.auth().currentUser.uid).update({
			displayName: newname,
			photoURL: this.afAuth.auth.currentUser.photoURL,
			uid: this.afAuth.auth.currentUser.uid
		  }).then(() => {
			resolve({ success: true });
		  }).catch((err) => {
			reject(err);
		  })
		  }).catch((err) => {
			reject(err);
		})
		})
		return promise;
	  }
	
	  getallusers() {
		var promise = new Promise((resolve, reject) => {
		  this.firedata.orderByChild('uid').once('value', (snapshot) => {
			let userdata = snapshot.val();
			let temparr = [];
			for (var key in userdata) {
			  temparr.push(userdata[key]);
			}
			resolve(temparr);
		  }).catch((err) => {
			reject(err);
		  })
		})
		return promise;
	  }
	

}