class NewsController {
  // [get] /news
  index(req, res) {
    res.render('news');
  }

  // [Get] /news/:slug
  show(req, res) {
    res.send(' Day la noi dung tin tuc');
  }
}
module.exports = new NewsController(); // xuat ra ngoai
