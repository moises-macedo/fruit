import { useState } from "react";
import { BsFillInfoSquareFill } from 'react-icons/bs';
import"../../Assets/Styles/Css/modalCard.css"

const ModalCard = ({ calories, carbohydrates, fat, protein, sugar }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleClickModal = () => {
        setIsModalVisible(!isModalVisible)
    }

    return (
        <div className={isModalVisible? "container--modalCard-info-true": "container--modalCard-info"}>
            <button className="modalCard--info-btn"            
            onClick={handleClickModal}>
                <p>
                    <BsFillInfoSquareFill />
                </p>
            </button>
            {isModalVisible ? (
                
                <ul className="card--list-info">
                    <h3>Valores Nutricionais</h3>
                    <li className="list-info">{calories ? (
                        <>
                            <span>Calorias</span>
                            <p>{calories}</p>
                        </>
                    ) : null
                    }
                    </li>
                    <li className="list-info">{carbohydrates ? (
                        <>
                            <span>Carboidratos</span>
                            <p>{carbohydrates}</p>
                        </>
                    ) : null
                    }
                    </li>
                    <li className="list-info">{fat ? (
                        <>
                            <span>Gordura</span>
                            <p>{fat}</p>
                        </>

                    ) : null
                    }
                    </li>
                    <li className="list-info">{protein ?
                        (<>
                            <span>Proteína</span>
                            <p>{protein}</p>
                        </>)
                        : null
                    }
                    </li>
                    <li className="list-info">{sugar ? (
                        <>
                            <span>Açucar</span>
                            <p>{sugar}</p>
                        </>
                    ) : null}
                    </li>
                </ul>

            )
                : null}
        </div>
    )
}
export default ModalCard