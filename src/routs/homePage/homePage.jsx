import SearchBar from "../../components/searchBar/searchBar"
import "./homePage.scss"

function HomePage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p>
                    What is a basic definition of text? Text is the exact, original words written by an author. 
                    Text is also a specific work as written by the original author. 
                    Text is also commonly used to refer to a text message or to send a text message. 
                    Text has several other senses as a noun.
                    </p>
                    <SearchBar/>
                    <div className="Boxes">
                        <div className="Box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="Box">
                            <h1>200</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="Box">
                            <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage