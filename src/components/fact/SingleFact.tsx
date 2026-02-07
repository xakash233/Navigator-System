import Counter from "../counter/Counter";

interface DataType {
    id: number;
    value: number;
    operator?: string;
    suffix?: string;
    label: string;
}

const SingleFact = ({ fact }: { fact: DataType }) => {
    const { value, operator, suffix, label } = fact;

    return (
        <>
            <div className="col-lg-4 col-md-4 item">
                <div className="fun-fact">
                    <div className="counter">
                        <div className="timer"><Counter end={value} /></div>
                        <div className="operator">{operator || suffix}</div>
                    </div>
                    <span className="medium">{label}</span>
                </div>
            </div>
        </>
    );
};

export default SingleFact;