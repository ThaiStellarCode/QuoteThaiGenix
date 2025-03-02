import { useState, useCallback } from 'react';
import SearchInput from './components/SearchInput';
import QuoteList from './components/QuoteList';
import RandomQuoteButton from './components/RandomQuoteButton';
import { quotes } from './data/quote';
import Layout from './Layout';

function App() {
    const [filteredQuotes, setFilteredQuotes] = useState(quotes);
    const [displayedQuotes, setDisplayedQuotes] = useState(quotes.slice(0, 6));
    const [isLoading, setIsLoading] = useState(false);

    const handleSearch = useCallback((searchTerm) => {
        setIsLoading(true);
        setTimeout(() => {
            const filtered = quotes.filter((quote) =>
                quote.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredQuotes(filtered);
            setDisplayedQuotes(filtered.slice(0, 6));
            setIsLoading(false);
        }, 1000);
    }, []);

    const handleRandom = () => {
        setIsLoading(true);
        setTimeout(() => {
            const randomQuotes = [...quotes]
                .sort(() => 0.5 - Math.random())
                .slice(0, 6);
            setDisplayedQuotes(randomQuotes);
            setIsLoading(false);
        }, 1000);
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8">คำคมไทย</h1>
                <div className="space-y-6">
                    <SearchInput onSearch={handleSearch} />
                    <div className="flex justify-center">
                        <RandomQuoteButton onRandomClick={handleRandom} />
                    </div>

                    <QuoteList quotes={displayedQuotes} isLoading={isLoading} />
                </div>
            </div>
        </Layout>
    );
}

export default App;
