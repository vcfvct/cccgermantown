
import * as React from "react";

interface AboutPageProps {
    data: {

    }
}
export default class extends React.Component<AboutPageProps, {}>{
    constructor(props: AboutPageProps, context: any) {
        super(props, context);
    }
    public render() {
        return (
            <div>
                <h1>教会事工</h1>
                <div>
                    <p>TBD</p>
                </div>
            </div>
        );
    }
}
