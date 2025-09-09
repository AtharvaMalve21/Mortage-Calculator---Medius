import React, { useState } from 'react';
import { Calculator, Home, User, CreditCard, CheckCircle, Star, ArrowRight, Menu, X } from 'lucide-react';

const BetterApp = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Mortgage Calculator State
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [propertyTax, setPropertyTax] = useState(265);
  const [homeInsurance, setHomeInsurance] = useState(1200);
  const [pmi, setPmi] = useState(200);

  // Calculate monthly payment
  const loanAmount = homePrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const numPayments = loanTerm * 12;
  const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
  const monthlyTax = propertyTax / 12;
  const monthlyInsurance = homeInsurance / 12;
  const monthlyPmi = pmi;
  const totalMonthlyPayment = monthlyPayment + monthlyTax + monthlyInsurance + monthlyPmi;

  const Navigation = () => (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div 
              className="text-2xl font-bold text-green-600 cursor-pointer"
              onClick={() => setCurrentPage('home')}
            >
              Better
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => setCurrentPage('home')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'home' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('about')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'about' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => setCurrentPage('calculator')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  currentPage === 'calculator' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'
                }`}
              >
                Mortgage Calculator
              </button>
              <button
                onClick={() => setCurrentPage('start')}
                className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700"
              >
                Get Started
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <button
                onClick={() => {setCurrentPage('home'); setMobileMenuOpen(false);}}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600"
              >
                Home
              </button>
              <button
                onClick={() => {setCurrentPage('about'); setMobileMenuOpen(false);}}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600"
              >
                About Us
              </button>
              <button
                onClick={() => {setCurrentPage('calculator'); setMobileMenuOpen(false);}}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600"
              >
                Mortgage Calculator
              </button>
              <button
                onClick={() => {setCurrentPage('start'); setMobileMenuOpen(false);}}
                className="block px-3 py-2 text-base font-medium bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The digital mortgage experience
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get pre-approved in as little as 3 minutes, with rates you can trust.
            </p>
            <button
              onClick={() => setCurrentPage('start')}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Get started
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find out why we're better
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">One Day Mortgage</h3>
              <p className="text-gray-600">
                Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Better HELOC</h3>
              <p className="text-gray-600">
                Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit. Access up to 90% of your home equity.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Insurance</h3>
              <p className="text-gray-600">
                Homeowners insurance, simplified. Compare quotes, bundle with your mortgage, and save money with our insurance marketplace.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Got questions? We've got answers
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our award-winning customer service team is here to help you every step of the way.
              </p>
              <button
                onClick={() => setCurrentPage('start')}
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center"
              >
                Get started <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$100B</div>
                <div className="text-gray-600">home loans funded entirely online</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">400K+</div>
                <div className="text-gray-600">Customers who chose Better Mortgage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our mission
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're making homeownership simpler, faster — and most importantly, more accessible for all Americans.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                The status quo is broken
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                The traditional processes around homeownership are opaque and stressful. Fees aren't transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes.
              </p>
              <p className="text-lg text-gray-600">
                It's a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                How we're changing things
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers'.
              </p>
              <p className="text-lg text-gray-600">
                That's why Better.com is redefining the homeownership process from the ground up. We're using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Company timeline
              </h2>
              <div className="space-y-8">
                {[
                  {
                    year: '2014',
                    description: 'After Vishal Garg\'s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts.'
                  },
                  {
                    year: '2015',
                    description: 'Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).'
                  },
                  {
                    year: '2016',
                    description: 'Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.'
                  },
                  {
                    year: '2021',
                    description: 'Better acquires Trussle — The UK\'s most innovative online mortgage broker.'
                  },
                  {
                    year: '2022',
                    description: 'Better Mortgage becomes the first fintech to fund $100B home loans entirely online.'
                  },
                  {
                    year: '2023',
                    description: 'Better Mortgage launches One Day Mortgage: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 w-20">
                      <div className="text-lg font-bold text-green-600">{item.year}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );

  const MortgageCalculator = () => (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mortgage Calculator
          </h1>
          <p className="text-xl text-gray-600">
            Calculate your monthly mortgage payment with taxes and insurance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Loan Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Home Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Down Payment
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loan Term (years)
                </label>
                <select
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value={15}>15 years</option>
                  <option value={30}>30 years</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Interest Rate (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Tax (annual)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={propertyTax}
                    onChange={(e) => setPropertyTax(Number(e.target.value))}
                    className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Home Insurance (annual)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={homeInsurance}
                    onChange={(e) => setHomeInsurance(Number(e.target.value))}
                    className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PMI (monthly)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-3 text-gray-500">$</span>
                  <input
                    type="number"
                    value={pmi}
                    onChange={(e) => setPmi(Number(e.target.value))}
                    className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Monthly Payment Breakdown</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium text-gray-700">Principal & Interest</span>
                <span className="text-lg font-semibold">${monthlyPayment.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium text-gray-700">Property Tax</span>
                <span className="text-lg font-semibold">${monthlyTax.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium text-gray-700">Home Insurance</span>
                <span className="text-lg font-semibold">${monthlyInsurance.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center py-3 border-b">
                <span className="font-medium text-gray-700">PMI</span>
                <span className="text-lg font-semibold">${monthlyPmi.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between items-center py-4 border-t-2 border-green-600 bg-green-50 px-4 rounded-lg">
                <span className="text-xl font-bold text-gray-900">Total Monthly Payment</span>
                <span className="text-2xl font-bold text-green-600">${totalMonthlyPayment.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Loan Summary</h3>
              <div className="text-sm text-gray-600 space-y-1">
                <div>Loan Amount: ${loanAmount.toLocaleString()}</div>
                <div>Down Payment: {((downPayment / homePrice) * 100).toFixed(1)}%</div>
                <div>Total Interest: ${((monthlyPayment * numPayments) - loanAmount).toLocaleString()}</div>
              </div>
            </div>

            <button
              onClick={() => setCurrentPage('start')}
              className="w-full mt-8 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Get Pre-approved
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const StartPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="inline-block bg-white rounded-full p-4 mb-6 shadow-sm">
            <User className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hi, I'm Betsy!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            What can I help you with?
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-center p-6 border-2 border-gray-200 rounded-lg hover:border-green-600 transition-colors cursor-pointer">
              <Home className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Buying a home</h3>
              <p className="text-gray-600">Get pre-approved and find your dream home</p>
            </div>
            
            <div className="text-center p-6 border-2 border-gray-200 rounded-lg hover:border-green-600 transition-colors cursor-pointer">
              <Calculator className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Refinancing</h3>
              <p className="text-gray-600">Lower your monthly payment or cash out equity</p>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              After a few questions, you'll unlock:
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <span className="text-gray-700">Custom mortgage rates</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <span className="text-gray-700">Exclusive offers</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <span className="text-gray-700">A personalized dashboard</span>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">$100B</div>
                <div className="text-gray-600">home loans funded entirely online</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">400K+</div>
                <div className="text-gray-600">Customers who chose a Better Mortgage</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setCurrentPage('calculator')}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'calculator':
        return <MortgageCalculator />;
      case 'start':
        return <StartPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      {renderCurrentPage()}
    </div>
  );
};

export default BetterApp;