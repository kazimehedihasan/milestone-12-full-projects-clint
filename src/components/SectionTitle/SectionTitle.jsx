/* eslint-disable react/prop-types */

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-3/12 my-8">
            <p className="text-yellow-500 mb-2">---{subHeading}---</p>
            <h3 className="uppercase text-3xl border-y-2 py-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;

