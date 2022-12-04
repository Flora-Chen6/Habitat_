import React from "react";

function Activity(name, time, info, location) {
    return (
        <a href=" " className="list-group-item list-group-item-action active bg-white text-dark border-secondary border-opacity-25" aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{name}</h5>
                <small className="text-muted">{time}</small>
            </div>
            <p className="mb-1">Meeting info: {info}</p>
            <small>Location: {location}</small>
        </a>
    );
}

export default Activity;
