import "./btnVerMas.css"

function BtnVerMas() {
    return (
        <button className="btn-ver-mas flex items-center">
            <span className="hover-underline-animation"> Ver más </span>
            <svg className="w-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </button>
    )
}

export default BtnVerMas;