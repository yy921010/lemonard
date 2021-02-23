import React from 'react';
import { useParams } from 'react-router-dom';

function NavigatorDetail(): JSX.Element {
    const { id } = useParams<{ id: string }>();
    return <>NavigatorDetail{id}</>;
}

export default NavigatorDetail;
