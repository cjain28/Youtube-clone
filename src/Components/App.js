import youtube from "../apis/youtube";
import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
    state = { videos: [], onSelectedVideo: null };

    componentDidMount(){
        this.onTermSubmit("Blast");
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({
            videos: response.data.items,
            onSelectedVideo: response.data.items[0]
        });
    };
    onSelectedVideo = (video) => {
        this.setState({ onSelectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className=" ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.onSelectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onSelectedVideo={this.onSelectedVideo} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
export default App;