import Document, {
	Html,
	Head, //* for something that shows up in all pages
	Main,
	NextScript,
} from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed:wght@400;700&family=Bellefair&display=swap"
						rel="stylesheet"
					/>
				</Head>

				<body>
					<Main></Main>
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
