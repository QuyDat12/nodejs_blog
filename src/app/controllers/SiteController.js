class SiteController {
  // [get] /home
  index(req, res) {
    res.render('home');
  }

  // [Get] /search
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController(); // xuat ra ngoai
