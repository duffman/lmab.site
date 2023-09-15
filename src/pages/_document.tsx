// src/pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script                                     from 'next/script'
import PageHeader                                 from "../components/HeaderComponent";

export default function MainDocument() {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="utf-8"/>

				<link
					href="/css/bootstrap.min.css"
					rel="stylesheet"
				/>

				<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'} />
						<link
							href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,200;6..12,400&family=Roboto+Slab:wght@200;900&display=swap"
							rel="stylesheet" />

				<script src="https://use.fontawesome.com/releases/v6.3.0/js/all.js" crossOrigin="anonymous"></script>
				<link href="https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900"
					  rel="stylesheet"/>
				<link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i"
					  rel="stylesheet"/>
				<link href="/css/styles.css" rel="stylesheet"/>


			</Head>
			<body id="page-top">

				{/***********************************
				 * Navigation
				 * *********************************/}

				<nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
					<div className="container px-5 d-flex justify-content-between align-items-center">
						<a className="navbar-brand" href="#page-top">
							<img src="/images/layout/logo-small.png" alt="" />
						</a>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarResponsive">
							<ul className="navbar-nav ms-auto">
								<li className="nav-item"><a className="nav-link" href="#!">Start</a></li>
								<li className="nav-item"><a className="nav-link" href="#contact">Kontakt</a></li>
								<li className="nav-item"><a className="nav-link" href="#about">Om</a></li>
							</ul>
						</div>
						<div className="d-flex align-items-center">
							<a href="https://www.instagram.com/lulea_microcement_och_bygg" target="_blank" rel="noopener noreferrer" className="btn instagram-btn">
								<i className="fab fa-instagram instagram-icon"></i>
							</a>

							<a href="https://www.facebook.com/microcementdesigninorr" target="_blank" rel="noopener noreferrer" className="btn btn-primary facebook-btn ml-2">
								<i className="fab fa-facebook-f facebook-icon"></i>
							</a>

						</div>
					</div>
				</nav>

				<PageHeader />

				<Main />


				{/* Footer */}
				<footer className="py-5 bg-black">
					<div className="container px-5">
						<p className="m-0 text-center text-white small">
							Luleå Microcement & Bygg AB<br />
							Org.nr: 559348-9064
						</p>
					</div>
				</footer>

				<NextScript />


				<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossOrigin="anonymous" />

			</body>
		</Html>
	)
}
