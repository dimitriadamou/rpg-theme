import {
    Link,
    Switch,
    Route
} from 'react-router-dom'

import FF7App from './ff7/app';

export default function SelectPage() {
    return (<>
            <Switch>
                <Route path="/ff7" component={FF7App} />
                <Route>
                    <Link
                    to="ff7/"
                    >
                        FF7
                    </Link>
                </Route>
            </Switch>
    </>);
}

export { SelectPage }