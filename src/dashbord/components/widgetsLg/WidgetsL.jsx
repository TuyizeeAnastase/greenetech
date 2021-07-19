import React from 'react';
import './widgetLg.css';
import profile from '../../../images/profile.jpg';

export default function WidgetsL() {

    const Button=({type})=>{
       return (<button className={"widgetLgBtn " + type}>{type}</button>);
    };

    return (
        <div className="widgetL">
            <h3 className="widgetLgTitle">Top Gases emitters</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">User</th>
                    <th className="widgetLgTh">Serial Number</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={profile} alt="profile" className="widgetLgIm" />
                        <span className="widgetLgName">Will Clifford</span>
                    </td>
                    
                    <td className="widgetLgSr">RAC 456 B</td>
                    <td className="widgetLgDate">2 Jan 2020</td>
                    <td className="widgetLgAmount">23</td>
                    <td className="widgetLgStatus"><Button type="Wonned"/></td>
                </tr>


                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={profile} alt="profile" className="widgetLgIm" />
                        <span className="widgetLgName">Will Clifford</span>
                    </td>
                    <td className="widgetLgAmount">RAC 456 B</td>
                    <td className="widgetLgDate">2 Jan 2020</td>
                    <td className="widgetLgAmount">23</td>
                    <td className="widgetLgStatus"><Button type="Wonned"/></td>
                </tr>

               
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={profile} alt="profile" className="widgetLgIm" />
                        <span className="widgetLgName">Will Clifford</span>
                    </td>
                    <td className="widgetLgAmount">RAC 456 B</td>
                    <td className="widgetLgDate">2 Jan 2020</td>
                    <td className="widgetLgAmount">23</td>
                    <td className="widgetLgStatus"><Button type="Wonned"/></td>
                </tr>

                
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={profile} alt="profile" className="widgetLgIm" />
                        <span className="widgetLgName">Will Clifford</span>
                    </td>
                    <td className="widgetLgAmount">RAC 456 B</td>
                    <td className="widgetLgDate">2 Jan 2020</td>
                    <td className="widgetLgAmount">23</td>
                    <td className="widgetLgStatus"><Button type="Wonned"/></td>
                </tr>

                
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={profile} alt="profile" className="widgetLgIm" />
                        <span className="widgetLgName">Will Clifford</span>
                    </td>
                    <td className="widgetLgAmount">RAC 456 B</td>
                    <td className="widgetLgDate">2 Jan 2020</td>
                    <td className="widgetLgAmount">23</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={profile} alt="profile" className="widgetLgIm" />
                        <span className="widgetLgName">Will Clifford</span>
                    </td>
                    <td className="widgetLgSr">RAC 456 B</td>
                    <td className="widgetLgDate">2 Jan 2020</td>
                    <td className="widgetLgAmount">23</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>


                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={profile} alt="profile" className="widgetLgIm" />
                        <span className="widgetLgName">Will Clifford</span>
                    </td>
                    <td className="widgetLgAmount">RAC 456 B</td>
                    <td className="widgetLgDate">2 Jan 2020</td>
                    <td className="widgetLgAmount">23</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>

               
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={profile} alt="profile" className="widgetLgIm" />
                        <span className="widgetLgName">Will Clifford</span>
                    </td>
                    <td className="widgetLgAmount">RAC 456 B</td>
                    <td className="widgetLgDate">2 Jan 2020</td>
                    <td className="widgetLgAmount">23</td>
                    <td className="widgetLgStatus"><Button type="Good"/></td>
                </tr>

                
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={profile} alt="profile" className="widgetLgIm" />
                        <span className="widgetLgName">Will Clifford</span>
                    </td>
                    <td className="widgetLgAmount">RAC 456 B</td>
                    <td className="widgetLgDate">2 Jan 2020</td>
                    <td className="widgetLgAmount">23</td>
                    <td className="widgetLgStatus"><Button type="Good"/></td>
                </tr>

                
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={profile} alt="profile" className="widgetLgIm" />
                        <span className="widgetLgName">Will Clifford</span>
                    </td>
                    <td className="widgetLgAmount">RAC 456 B</td>
                    <td className="widgetLgDate">2 Jan 2020</td>
                    <td className="widgetLgAmount">23</td>
                    <td className="widgetLgStatus"><Button type="Good"/></td>
                </tr>
            </table>
        </div>
    )
}
