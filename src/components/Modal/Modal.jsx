import React, { useEffect } from "react";
import "./Modal.css";
import HTML from "../../assets/img/html.svg";
import Arrow from "../../assets/img/arrow-right.svg";
import ModalField from "./ModalField";

function Modal({ setModalOpen, modalOpen, rank, setRank, percentile, setPercentile, correctAnswers, setCorrectAnswers }) {
    useEffect(() => {
        if (modalOpen) {
            // Disable scroll when the modal is open
            document.body.style.overflow = 'hidden';
        } else {
            // Enable scroll when the modal is closed
            document.body.style.overflow = 'visible';
        }

        // Cleanup effect on unmounting
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [modalOpen]);


    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="modal__container">
                    <div className="modal__top">
                        <h1 className="modal__heading">Update Score</h1>
                        <img src={HTML} alt="" />
                    </div>
                    <div className="modalField__conatiner">
                        {/* <ModalField serial_no="1" Title="rank" rank={rank} setRank={setRank} percentile={percentile} setPercentile={setPercentile}/>
                        <ModalField serial_no="2" Title="percentile" rank={rank} setRank={setRank} percentile={percentile} setPercentile={setPercentile} />
                        <ModalField serial_no="3" Title="score" /> */}

                        {/* rank input */}
                        <div className="modal__field">
                            <div className="modal__innerDiv">

                                <div className="modal__number">1</div>
                                <p className="modal__field__title">Update your <span style={{ fontWeight: '700' }}>rank</span></p>
                            </div>
                            <input className="modal__input" type="number" />
                        </div>

                        {/* percentile input */}
                        <div className="modal__field">
                            <div className="modal__innerDiv">

                                <div className="modal__number">2</div>
                                <p className="modal__field__title">Update your <span style={{ fontWeight: '700' }}>percentile</span></p>
                            </div>
                            <input className="modal__input" type="number" />
                        </div>

                        {/* score input */}
                        <div className="modal__field">
                            <div className="modal__innerDiv">

                                <div className="modal__number">3</div>
                                <p className="modal__field__title">Update your <span style={{ fontWeight: '700' }}>current score (out of 15)</span></p>
                            </div>
                            <input className="modal__input" type="number" />
                        </div>


                    </div>
                    <div className="modal__footer">
                        <button className="modal__btn__secondary" onClick={() => setModalOpen(false)}>Cancel</button>
                        <button className="modal__btn__primary" onClick={() => setModalOpen(false)}>Save <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src={Arrow} alt="" /></span></button>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Modal;