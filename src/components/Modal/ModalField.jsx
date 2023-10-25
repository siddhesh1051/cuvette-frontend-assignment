import React from 'react'
import './Modal.css'

const ModalField = ({serial_no,Title}) => {
    return (
        <div className="modal__field">
            <div className="modal__innerDiv">

                <div className="modal__number">{serial_no}</div>
                <p className="modal__field__title">Update your <span style={{ fontWeight: '700' }}>{Title}</span></p>
            </div>
            <input className="modal__input" type="text" />
        </div>
    )
}

export default ModalField
