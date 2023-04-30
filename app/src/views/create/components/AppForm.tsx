import {FC, useEffect, useState} from 'react';

export const AppForm: FC = () => {
    const [appName, setAppName] = useState('');
    const [appType, setAppType] = useState('free');
    const [creators, setCreators] = useState([
        { isInput: true, text: '', royalty: 0 },
        { isInput: false, text: '', royalty: 0 }
    ]);
    const totalRoyalty = creators.reduce((acc, creator) => acc + creator.royalty, 0);
    const [sliderValidationMessage, setSliderValidationMessage] = useState('');

    useEffect(() => {
        let timer;
        if (sliderValidationMessage) {
            timer = setTimeout(() => {
                setSliderValidationMessage('');
            }, 5000);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [sliderValidationMessage]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('App Name:', appName);
        console.log('App Type:', appType);
        console.log('Creators:', creators);
    };

    const handleCreatorChange = (index, value) => {
        const newCreators = [...creators.map((c, i) => {
            return {
                isInput: !c.isInput && i === index && value.length > 0 ? true : c.isInput,
                text: i === index ? value : c.text,
                royalty: c.royalty,
            }
        })];

        if (newCreators.length < 4 && newCreators.find((c) => !c.isInput) == null) {
            newCreators.push({ isInput: false, text: '', royalty: 0})
        }

        setCreators(newCreators);
    };

    const removeCreator = (index) => {
        if (creators.length > 1 && creators[index].isInput) {
            const newCreators = [...creators.filter((c) => c.isInput)];
            newCreators.splice(index, 1);

            if (newCreators.length < 4) {
                newCreators.push({ isInput: false, text: '', royalty: 0})
            }

            setCreators(newCreators);
        }
    };

    const handleRoyaltyChange = (index, value) => {
        const newPercentage = parseInt(value, 10);
        const currentTotal = creators.reduce((acc, creator) => acc + creator.royalty, 0);
        const newTotal = currentTotal - creators[index].royalty + newPercentage;

        if (newTotal <= 100) {
            const newCreators = creators.map((creator, i) => {
                if (i === index) {
                    return { ...creator, royalty: newPercentage };
                }
                return creator;
            });
            setCreators(newCreators);
            setSliderValidationMessage('');
        } else {
            setSliderValidationMessage('Total royalty percentage cannot exceed 100.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* App Name */}
            <div>
                <label htmlFor="appName" className="block text-sm font-medium">
                    App Name
                </label>
                <input
                    type="text"
                    id="appName"
                    name="appName"
                    value={appName}
                    onChange={(e) => setAppName(e.target.value)}
                    className="mt-1 w-1/2 h-10 py-2 px-4 focus:border-2 focus:border-fuchsia-500 focus:outline-none text-black block border border-gray-300 rounded-md"
                />
            </div>
            {/* Creators */}
            <div>
                <label htmlFor="creators" className="block text-sm font-medium">
                    Creators
                </label>
                {creators.map((creator, index) => (
                    <div>

                        <div key={index} className="relative w-1/2 mt-1">
                            <input
                                type="text"
                                id={`creator-${index}`}
                                name={`creator-${index}`}
                                value={creator.text}
                                onChange={(e) => handleCreatorChange(index, e.target.value)}
                                className={`h-10 w-full py-2 px-4 pr-8 focus:border-2 focus:border-fuchsia-500 focus:outline-none text-black block border border-gray-300 rounded-md ${index === creators.length - 1 && !creator && 'bg-gray-200'}`}
                                placeholder={index === creators.length - 1 && !creator.isInput ? 'Add another creator' : ''}
                            />
                            {creators.length > 2 && creators[index].isInput && (
                                <button
                                    type="button"
                                    onClick={() => removeCreator(index)}
                                    className="absolute right-1 top-1/2 transform -translate-y-1/2 py-1 px-2 bg-fuchsia-500 text-white rounded-md"
                                >
                                    X
                                </button>
                            )}
                        </div>

                        {creators[index].isInput && (
                            <div className="relative w-1/2 mt-1">
                                <label htmlFor={`royalty-${index}`} className="text-sm font-medium">
                                    Royalty: {creator.royalty}%
                                </label>
                                <input
                                    type="range"
                                    id={`royalty-${index}`}
                                    name={`royalty-${index}`}
                                    value={creator.royalty}
                                    onChange={(e) => handleRoyaltyChange(index, e.target.value)}
                                    className="w-full slider-thumb-fuchsia-500 slider-track-fuchsia-200"
                                    min="0"
                                    max="100"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-2">
                <label className="text-sm font-medium">
                    Total Royalty: {totalRoyalty}%
                </label>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="py-2 px-4 bg-indigo-600 text-white rounded-md"
            >
                Submit
            </button>

            {sliderValidationMessage && (
                <div className="text-red-600 text-sm mt-2">{sliderValidationMessage}</div>
            )}
        </form>
    );
};
