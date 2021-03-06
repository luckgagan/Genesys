﻿import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

export default class Wishlist extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>
                Wishlist Registration Form</h1>

            <p>Hey, we are hear to help you. Give us your details & we will find a match for your need. Get well soon :)</p>
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>:</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>AaDhar Card</td>
                        <td>:</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Date Of Birth</td>
                        <td>:</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Location</td>
                        <td>:</td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Blood Group</td>
                        <td>:</td>
                        <td>
                            <select name="bloodGroup">
                                <option value="A+" >A+                 </option>
                                <option value="A-" >A-                 </option>
                                <option value="B+" >B+                 </option>
                                <option value="B-" >B-                 </option>
                                <option value="O+" >O+                 </option>
                                <option value="O-" >O-                 </option>
                                <option value="AB+" >AB+                 </option>
                                <option value="AB-" >AB-                 </option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Required Organ</td>
                        <td>:</td>
                        <td><select name="bodyOrgans" multiple className="selectMultiple">
                            <option value="liver" >liver          </option>
                            <option value="lungs ">lungs          </option>
                            <option value="heart" >heart          </option>
                            <option value="pancreas">pancreas      </option>
                            <option value="intestines">intestines      </option>
                        </select></td>
                    </tr>
                </tbody>
            </table>
            <div className="padding-left-135">
                <input type="Submit" className="btn btn-primary btn-lg" value="Submit" />
            </div>
        </div>;
    }
}