import React from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import "./TabGroup.css"

const tabs = [
    { label: 'Університет', path: 'university' },
    { label: 'Абітурієнту', path: 'applicant' },
    { label: 'Освіта', path: 'education' },
    { label: 'Наука', path: 'science' },
    { label: 'Міжнародна діяльність', path: 'internationalactivity' },
    { label: 'Дозвілля', path: 'leisure' },
    { label: 'Випускникам', path: 'graduates' }
];

const TabGroup = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const currentTab = location.pathname.split("/").pop();

    const allowedTabs = tabs.map((tab) => tab.path);

    if (!allowedTabs.includes(currentTab)) {
        return <Navigate to="/ua/university" replace />;
    }

    const handleTabClick = (path) => {
        if (currentTab !== path) {
            navigate(`/ua/${path}`);
        }
    };



    return (
        <div>
            <div className="tab-group">
                {tabs.map((tab) => (
                    <button
                        key={tab.path}
                        className={`tab-button ${currentTab === tab.path ? "active" : ""}`}
                        onClick={() => handleTabClick(tab.path)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="tab-content">
                {currentTab === "university" && <div>Університет</div>}
                {currentTab === "applicant" && <div>Абітурієнту</div>}
                {currentTab === "education" && <div>Освіта</div>}
                {currentTab === "science" && <div>Наука</div>}
                {currentTab === "internationalactivity" && <div>Міжнародна діяльність</div>}
                {currentTab === "leisure" && <div>Дозвілля</div>}
                {currentTab === "graduates" && <div>Випускникам</div>}
            </div>
        </div>
    );
};

export default TabGroup;
