import React from "react";
import "./home.styles.css";

const Home = () => (
        <div className="container homeContainer">
            <div className="row">
                <div className="col-12 homeBtnContainer">
                    <button type="button" className="btn btn-primary homeBtn">
                        Flea Market
                    </button>
                    <button type="button" className="btn btn-secondary homeBtn">
                        Hideout
                    </button>
                    <button type="button" className="btn btn-success homeBtn">
                        Quests
                    </button>
                </div>
            </div>
        </div>
);

export default Home;
