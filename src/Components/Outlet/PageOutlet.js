import { Outlet } from "react-router-dom";


function PageOutlet() {

    return (
        <>
            <div className="nk-block-head nk-block-head-lg my-5">
                <div className="nk-block-between-md g-4">
                    <div className="nk-block-head-content">
                        <h2 className="nk-block-title fw-normal">Ласкаво просимо, у <b>FrankoClinic</b></h2>
                        <div className="nk-block-des">
                            <p>Ми FrankoLab Clinic - сучасна, цифрова, інноваційна та безпечна cтоматологія в івано франківську, яка заснована на базі однієї з найбільших зуботехнічних лабораторій України — FrankoLab.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Outlet />
            </div>
        </>




    );
}

export default PageOutlet;
