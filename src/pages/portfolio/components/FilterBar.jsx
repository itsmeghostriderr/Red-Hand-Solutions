import React from 'react';
import { Search, X, Filter } from 'lucide-react';

const FilterBar = ({ 
  searchTerm, 
  onSearchChange, 
  selectedIndustry, 
  onIndustryChange, 
  selectedTechnology, 
  onTechnologyChange, 
  selectedType, 
  onTypeChange,
  onClearFilters,
  totalProjects,
  filteredCount
}) => {
  const industries = [
    { value: 'all', label: 'All Industries' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
    { value: 'finance', label: 'Finance' },
    { value: 'logistics', label: 'Logistics' },
    { value: 'textile', label: 'Textile' },
    { value: 'chemical', label: 'Chemical' },
    { value: 'startup', label: 'Startups' }
  ];

  const technologies = [
    { value: 'all', label: 'All Technologies' },
    { value: 'react', label: 'React' },
    { value: 'nodejs', label: 'Node.js' },
    { value: 'python', label: 'Python' },
    { value: 'flutter', label: 'Flutter' },
    { value: 'php', label: 'PHP' },
    { value: 'mysql', label: 'MySQL' },
    { value: 'mongodb', label: 'MongoDB' },
    { value: 'aws', label: 'AWS' },
    { value: 'firebase', label: 'Firebase' }
  ];

  const projectTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'web-application', label: 'Web Application' },
    { value: 'mobile-app', label: 'Mobile App' },
    { value: 'e-commerce', label: 'E-commerce' },
    { value: 'cms', label: 'CMS' },
    { value: 'api', label: 'API Development' },
    { value: 'integration', label: 'System Integration' }
  ];

  const hasActiveFilters = selectedIndustry !== 'all' || selectedTechnology !== 'all' || selectedType !== 'all' || searchTerm.trim() !== '';

  return (
    <div className="rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 p-6 mb-10 shadow-lg text-left">
      {/* Search Input */}
      <div className="relative mb-5">
        <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search projects by title, client, tech, or sector..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-white dark:bg-[#10121A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 font-medium"
        />
        {searchTerm && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filter Select Dropdowns */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1.5">
            Industry
          </label>
          <select
            value={selectedIndustry}
            onChange={(e) => onIndustryChange(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#10121A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            {industries.map((ind) => (
              <option key={ind.value} value={ind.value} className="bg-white dark:bg-[#10121A]">
                {ind.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1.5">
            Technology
          </label>
          <select
            value={selectedTechnology}
            onChange={(e) => onTechnologyChange(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#10121A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            {technologies.map((tech) => (
              <option key={tech.value} value={tech.value} className="bg-white dark:bg-[#10121A]">
                {tech.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1.5">
            Project Type
          </label>
          <select
            value={selectedType}
            onChange={(e) => onTypeChange(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#10121A] border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            {projectTypes.map((type) => (
              <option key={type.value} value={type.value} className="bg-white dark:bg-[#10121A]">
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Bar */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-white/5 text-xs text-gray-500 dark:text-gray-400">
        <span className="flex items-center gap-1.5">
          <Filter className="w-3.5 h-3.5 text-red-500" />
          Showing <strong className="text-gray-900 dark:text-white">{filteredCount}</strong> of {totalProjects} projects
        </span>

        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="text-red-600 dark:text-red-400 font-bold hover:underline flex items-center gap-1"
          >
            <X className="w-3.5 h-3.5" /> Clear All Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterBar;