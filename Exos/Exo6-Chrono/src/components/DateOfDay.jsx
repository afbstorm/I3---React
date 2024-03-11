const DateOfDay = () => {

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dateFr = `${day}/${month}/${year}`;

    const simplierDate = date.toLocaleDateString('fr-BE');

    return (
        <>
            <h2>Date : </h2>
            <p>{dateFr}</p>
            <p>{simplierDate}</p>
        </>
    )
}

export default DateOfDay;