import './Spinner.scss';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = ({ loading }) => {
    const override = css`
        display: block;
        margin: 0 auto;
    `;

    return (
        <div className="loading">
            <ClipLoader color={"#ffff"} loading={loading} css={override} size={150} />
        </div>
    );
};

export default Spinner;