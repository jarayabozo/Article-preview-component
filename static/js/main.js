const btnShow = document.getElementById("btnShow");
const btnHide = document.getElementById("btnHide");
const contentShare = document.getElementById("share");
const shareFacebook = document.getElementById("shareFacebook");
const shareTwitter = document.getElementById("shareTwitter");
const sharePinterest = document.getElementById("sharePinterest");

btnShow.addEventListener("click", (e) => {
  e.stopPropagation();
  contentShare.classList.toggle("show");;
});
btnHide.addEventListener("click", (e) => {
  e.stopPropagation();
  contentShare.classList.toggle("show");;
});
document.addEventListener("click", (e) => {
  e.stopPropagation();
  contentShare.classList.remove("show");
})
const title_share = document.title;
const hashtags = "frontendmentor,challenge";
const url_share = window.location.origin;

shareFacebook.dataset.hashtag = hashtags;
shareFacebook.dataset.url = url_share;

shareTwitter.dataset.title = title_share;
shareTwitter.dataset.hashtags = hashtags;
shareTwitter.dataset.url = url_share;

sharePinterest.dataset.url = url_share;

