import React from 'react'
import './featureInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
export default function FeatureInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Active</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">2.456</span>
                    <span className="featuredMoneyRate">-11.2<ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <div className="featuredSub">Compared To Last Month</div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Registered</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">5.456</span>
                    <span className="featuredMoneyRate">-11.2<ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <div className="featuredSub">Compared To Last Month</div>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Wonned</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">2.456</span>
                    <span className="featuredMoneyRate">+2.2<ArrowUpward className="featuredIcon"/></span>
                </div>
                <div className="featuredSub">Compared To Last Month</div>
            </div>
        </div>
    )
}
