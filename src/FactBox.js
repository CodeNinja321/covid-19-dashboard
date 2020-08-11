import React from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";

function FactBox({ title, cases, total }) {
    return (
        <Card className="factBox">
            <CardContent>
                <Typography className="factBox__title" color="textSecondary">
                    {title}
                </Typography>

                <h2 className="factBox__cases">{cases}</h2>

                <Typography className="factBox__total" color="textSecondary">
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default FactBox
