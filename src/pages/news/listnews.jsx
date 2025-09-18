import Navigation from "../../components/navigation";
import Footer from "../../components/footer";

function ListNews() {
  return (
    <>
      <Navigation />
      {/* PAGE HEADER START */}
      <div className="page-header text-center">
        <h1>News</h1>
        <a href="/">Home</a>
      </div>
      {/* PAGE HEADER END */}
      <section className="news-section">
        <div className="text-center">
          <br />
          <h1 className="fw-bold">News 2025</h1>
          <div className="wrapper row">
            {/* NEWS 1 START */}
            <div className="col-lg-3 card">
              <img
                className="img-fluid mb-2"
                src="./assets/news/20251.jpg"
                alt=""
              />
              <h5>
                GloCoLiS, ISPC, and WECC 2025 Successfully Held at Dian Nuswantoro University, Semarang
              </h5>
              <p>
                {" "}
                Jabaran.id – The Indonesian Young Scientist Association (IYSA) has once again successfully held three prestigious international competitions, namely GloCoLiS (Global Competition for Life Sciences), International Social Project Competition (ISPC), and World Essay Competition Championship (WECC). This year marks a special milestone with
                the 5th anniversary of GloCoLiS, as well as the 2nd anniversary of ISPC and WECC.
              </p>
              <a
                href="https://jabaran.id/glocolis-ispc-dan-wecc-2025-sukses-diselenggarakan-di-universitas-dian-nuswantoro-semarang/"
                target="_blank"
                className="btn btn-action"
              >
                See More
              </a>
            </div>
            {/* NEWS 1 END */}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ListNews;
