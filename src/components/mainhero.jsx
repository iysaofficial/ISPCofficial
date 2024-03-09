function MainHero() {
    return (
        <>
        <section className="mainhero-section">
            <div className="mainhero-wrapper">
                <div className="first-content">
                    {/* <div className="image-content col-12 col-lg-6">
                        <img src="./assets/img/ISPC LOGO.png" alt="" />
                    </div> */}
                    <div className="text-content ">
                        <h1>INTERNATIONAL SCIENCE PROJECT COMPETITION</h1>
                        <p className="mx-auto">
                            Welcome to the International Science Project Competition (ISPC) It's a stage for innovators, researchers, and young thinkers from around the globe, as well as educators, professors, and researchers from various fields. Explore categories like Social Science, Innovative Science, Environmental Science, and Engineering, including dedicated sections tailored for the public such as Education and Classroom Action Research. Showcase your ideas, gain recognition, and contribute to the future of science. Register now!
                        </p>
                    </div>
                </div>
                <div className="second-content text-center">
                    <a className="btn btn-action" href="https://registration-ispc.vercel.app/" target="_blank">Link Registration</a>
                    {/* <a className="btn btn-action">Guide Book</a> */}
                </div>
            </div>
        </section>
    </>
    )
}

export default MainHero;