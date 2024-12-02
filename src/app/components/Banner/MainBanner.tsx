import "./styles/banner.scss";
import "../Pattern/ChevronPattern";
import ChevronPattern from "../Pattern/ChevronPattern";
import CardContainer from "../Card/CardContainer";

export default function MainBanner() {

    return (
      <div className="banner">
        <div className="banner__squares">
            <div className="banner__chevron-container">
            </div>
        </div>
      </div>
    );
  }
