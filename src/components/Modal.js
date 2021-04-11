import React, { Component } from "react";
import styled from "styled-components";
import { CatConsumer, ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
    render() {
        return (
            <CatConsumer>
                {value => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalCat;
                    if (!modalOpen) {
                        return null;
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div
                                            className="col-8 mx-auto col-md-6 col-lg-4 p-5 text-center text-capitalize"
                                            id="modal"
                                        >
                                            <h5>About</h5>
                                            <img src={img} className="img-fluid" alt="" />
                                            <h5>{title}</h5>
                                            <h5 className="text-muted">price : ${price}</h5>
                                            <Link to="/details">
                                                <ButtonContainer
                                                    onClick={() => {
                                                        closeModal();
                                                    }}
                                                >
                                                    View Detail
                                        </ButtonContainer>
                                            </Link>
                                            <Link to="/">
                                                <ButtonContainer
                                                    onClick={() => {
                                                        closeModal();
                                                    }}
                                                >
                                                    Close
                                        </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    }
                }
                }
            </CatConsumer>
        )
    }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;