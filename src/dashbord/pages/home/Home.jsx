import React from 'react';
import './home.css';
import FeatureInfo from '../../components/featureInfo/FeatureInfo';
import Chart from '../../components/charts/Chart';
import { userData } from '../../../dummyData';
import WidgetsL from '../../components/widgetsLg/WidgetsL';
import WidgetSm from '../../components/widgetSm/WidgetSm';

export default function Home() {
    return (
        <div className="home">
            <FeatureInfo/>
            <Chart data={userData} title="Emission Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetsL/>
            </div>
        </div>
    )
}
