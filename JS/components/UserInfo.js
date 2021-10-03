import BaseComponent from "./BaseComponent.js";
import { auth, db, storage } from "../firebase.js";
export default class UserInfo extends BaseComponent {
  render() {
    let $profileInfo = document.createElement("div");
    $profileInfo.classList.add("profile-info");
    $profileInfo.innerHTML = `
    <div class="profile-image">
      <div class="profile-wallpaper"><img src="${this.props.user.wallpaper}" alt="" /></div>
      <div class="profile-avt"><img src="${this.props.user.image ? this.props.user.image : "./DATA/Users/user.png"}" alt="" /></div>
    </div>
    <div class="profile-content">
      <div class="profile-edit"><i class="fas fa-pen-square"></i></div>
      <div class="profile-name title">${this.props.user.name}</div>
      <div class="profile-email">${this.props.user.email}</div>
      <div class="profile-role"><i class="fas fa-user-tag"></i><span>${this.props.user.role ? this.props.user.role : "User"}</span></div>
      <div class="profile-bio">${this.props.user.bio}</div>
      <div class="profile-total">
        <div class="profile-favor"><i class="far fa-star"></i><span class="favor-num">${this.props.user.storiesRated.length}</span></div>
        <div class="profile-read"><i class="fab fa-readme"></i><span class="read-num">${this.props.user.storiesRead.length}</span></div>
        <div class="profile-comment"><i class="far fa-comment-dots"></i><span class="comment-num">${this.props.user.storiesCommented.length}</span></div>
      </div>
    </div>
    `;
    return $profileInfo;
  }
}
