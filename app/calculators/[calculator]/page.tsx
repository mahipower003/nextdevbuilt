'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Calculator, TrendingUp, DollarSign, Calendar, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const calculatorSchema = z.object({
  age: z.string().min(1, 'Age is required'),
  income: z.string().min(1, 'Income is required'),
  coverage: z.string().min(1, 'Coverage amount is required'),
  term: z.string().min(1, 'Policy term is required'),
});

type CalculatorForm = z.infer<typeof calculatorSchema>;

const calculatorConfigs = {
  'term-insurance': {
    title: 'Term Insurance Calculator',
    description: 'Calculate your ideal term insurance coverage and premium amounts',
    icon: Calculator,
    color: 'from-blue-500 to-cyan-500',
  },
  'maturity': {
    title: 'Maturity Calculator',
    description: 'Project maturity amounts with bonus calculations',
    icon: Calendar,
    color: 'from-orange-500 to-red-500',
  },
};

const COLORS = ['#8B5CF6', '#3B82F6', '#10B981', '#F59E0B', '#EF4444'];

export default function CalculatorPage({ params }: { params: { calculator: string } }) {
  const [results, setResults] = useState<any>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const config = calculatorConfigs[params.calculator as keyof typeof calculatorConfigs] || calculatorConfigs['term-insurance'];
  const Icon = config.icon;

  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm<CalculatorForm>({
    resolver: zodResolver(calculatorSchema),
  });

  const onSubmit = async (data: CalculatorForm) => {
    setIsCalculating(true);
    
    // Simulate calculation
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const age = parseInt(data.age);
    const income = parseInt(data.income);
    const coverage = parseInt(data.coverage);
    const term = parseInt(data.term);

    // Mock calculation results
    const annualPremium = Math.round(coverage * 0.003 * (age / 30));
    const monthlyPremium = Math.round(annualPremium / 12);
    const totalPremiums = annualPremium * term;
    const maturityAmount = params.calculator === 'term-insurance' ? 0 : Math.round(coverage * 1.2);

    const chartData = Array.from({ length: Math.min(term, 10) }, (_, i) => ({
      year: `Year ${i + 1}`,
      premium: annualPremium,
      value: Math.round(coverage * (1 + (i * 0.05))),
    }));

    const pieData = [
      { name: 'Life Coverage', value: coverage, color: COLORS[0] },
      { name: 'Total Premiums', value: totalPremiums, color: COLORS[1] },
      { name: 'Tax Benefits', value: Math.round(annualPremium * 0.2), color: COLORS[2] },
    ];

    setResults({
      annualPremium,
      monthlyPremium,
      totalPremiums,
      maturityAmount,
      chartData,
      pieData,
      coverage,
      term,
    });
    
    setIsCalculating(false);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`w-20 h-20 bg-gradient-to-br ${config.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{config.title}</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">{config.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                    <BarChart3 className="w-6 h-6 mr-2 text-purple-600" />
                    Calculator Inputs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <Label htmlFor="age" className="text-sm font-medium text-gray-700">
                        Age (years) *
                      </Label>
                      <Input
                        id="age"
                        type="number"
                        {...register('age')}
                        className="mt-1 rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        placeholder="30"
                        min="18"
                        max="65"
                      />
                      {errors.age && (
                        <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="income" className="text-sm font-medium text-gray-700">
                        Annual Income (₹) *
                      </Label>
                      <Input
                        id="income"
                        type="number"
                        {...register('income')}
                        className="mt-1 rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        placeholder="1000000"
                        min="100000"
                      />
                      {errors.income && (
                        <p className="mt-1 text-sm text-red-600">{errors.income.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="coverage" className="text-sm font-medium text-gray-700">
                        Coverage Amount (₹) *
                      </Label>
                      <Input
                        id="coverage"
                        type="number"
                        {...register('coverage')}
                        className="mt-1 rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                        placeholder="5000000"
                        min="100000"
                      />
                      {errors.coverage && (
                        <p className="mt-1 text-sm text-red-600">{errors.coverage.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="term" className="text-sm font-medium text-gray-700">
                        Policy Term (years) *
                      </Label>
                      <Select onValueChange={(value) => setValue('term', value)}>
                        <SelectTrigger className="rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500">
                          <SelectValue placeholder="Select term" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10 years</SelectItem>
                          <SelectItem value="15">15 years</SelectItem>
                          <SelectItem value="20">20 years</SelectItem>
                          <SelectItem value="25">25 years</SelectItem>
                          <SelectItem value="30">30 years</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.term && (
                        <p className="mt-1 text-sm text-red-600">{errors.term.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isCalculating}
                      className={`w-full bg-gradient-to-r ${config.color} hover:shadow-lg text-white py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200`}
                    >
                      {isCalculating ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Calculating...
                        </div>
                      ) : (
                        'Calculate Now'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {results ? (
                <div className="space-y-6">
                  {/* Summary Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="border-0 shadow-lg bg-white">
                      <CardContent className="p-6 text-center">
                        <div className="text-2xl font-bold text-purple-600">₹{results.monthlyPremium.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Monthly Premium</div>
                      </CardContent>
                    </Card>
                    <Card className="border-0 shadow-lg bg-white">
                      <CardContent className="p-6 text-center">
                        <div className="text-2xl font-bold text-blue-600">₹{results.annualPremium.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Annual Premium</div>
                      </CardContent>
                    </Card>
                    <Card className="border-0 shadow-lg bg-white">
                      <CardContent className="p-6 text-center">
                        <div className="text-2xl font-bold text-green-600">₹{results.coverage.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Life Coverage</div>
                      </CardContent>
                    </Card>
                    <Card className="border-0 shadow-lg bg-white">
                      <CardContent className="p-6 text-center">
                        <div className="text-2xl font-bold text-orange-600">₹{results.totalPremiums.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Total Premiums</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Charts */}
                  <Card className="border-0 shadow-xl bg-white">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900">Premium vs Coverage Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={results.chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip formatter={(value, name) => [`₹${(value as number).toLocaleString()}`, name]} />
                            <Bar dataKey="premium" fill="#8B5CF6" name="Annual Premium" />
                            <Bar dataKey="value" fill="#3B82F6" name="Policy Value" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 shadow-xl bg-white">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-gray-900">Coverage Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={results.pieData}
                              dataKey="value"
                              nameKey="name"
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              label={({ name, value }) => `${name}: ₹${value.toLocaleString()}`}
                            >
                              {results.pieData.map((entry: any, index: number) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip formatter={(value) => `₹${(value as number).toLocaleString()}`} />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm h-96 flex items-center justify-center">
                  <CardContent className="text-center">
                    <div className={`w-20 h-20 bg-gradient-to-br ${config.color} rounded-2xl flex items-center justify-center mx-auto mb-6 opacity-50`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enter Your Details</h3>
                    <p className="text-gray-600">Fill in the form to see your calculation results and visualizations.</p>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}