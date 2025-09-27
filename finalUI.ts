/**
 * =================================================================
 * ADVANCED FEATURE SUGGESTIONS FOR PROJECT HEALTH DASHBOARD
 * These features demonstrate expertise in GraphQL, Prediction Modeling,
 * DORA Metrics (DevOps), and API Rate Limit Management.
 * =================================================================
 */

// 1. Core Data Structures

interface Contributor {
    user: string;
    avatarUrl: string; // New field for UI
    commits: number;
    loc_changed: number;
}

interface LanguageMetric {
    name: string;
    percentage: number;
    color: string;
}

interface IssuePrediction {
    avgTimeToFirstLabelHours: number; // Triage metric
    severity: 'Low' | 'Medium' | 'High'; // Simple classification
    nextWeekPredictedIssues: number; // Mock prediction
}

// NEW INTERFACE 4: DORA Metrics (DevOps Performance)
interface DoraMetrics {
    deploymentFrequency: string;       // e.g., '5 times per day'
    leadTimeForChangesHours: number;   // Time from commit to production (e.g., 2.5 hours)
    timeToRestoreServiceHours: number; // Time to recover from failure (e.g., 1.1 hours)
    changeFailureRate: string;        // Percentage of changes leading to production failure (e.g., '15%')
}

// NEW INTERFACE 5: Team Velocity Tracking (Project Management Integration)
interface TeamVelocity {
    currentSprintName: string;
    totalStoryPoints: number;
    completedStoryPoints: number;
    sprintCompletionPercentage: number;
}

// NEW INTERFACE 6: API Status and Rate Limiting
interface ApiStatus {
    callsMade: number;
    rateLimitRemaining: number;
    rateLimitTotal: number;
    resetTime: number; // Unix timestamp for when the limit resets
    isRateLimited: boolean;
}


interface ProjectData {
    owner: string;
    repo: string;
    fullName: string;
    description: string;
    stars: number;
    primaryLanguage: string;
    avgPrMergeTimeDays: number;

    // Enhanced Weekly Activity Data (from GraphQL's 'contributions')
    weeklyCommits: number[];
    weeklyPrOpened: number[];
    weeklyPrMerged: number[];
    weeklyAdditions: number[];
    weeklyDeletions: number[];
    
    // Complex Data Structures
    languageBreakdown: LanguageMetric[]; 
    triageScore: number;
    issuePredictionModel: IssuePrediction;
    
    // NEW FEATURE DATA:
    doraMetrics: DoraMetrics;         // Added DORA Metrics
    teamVelocity: TeamVelocity;       // Added Team Velocity
    apiStatus: ApiStatus;             // Added API Status Tracker
    
    // Contributor data remains complex
    contributors: Contributor[]; 
}

// 2. Fetching and Data Processing Logic

/**
 * Function to fetch ALL data using a single GraphQL query.
 * This function signature demonstrates dynamic time-range querying.
 *
 * @param owner The repository owner.
 * @param repo The repository name.
 * @param weeks The historical range (e.g., 12, 26, 52) to fetch data for.
 * @returns Promise<ProjectData>
 */
async function fetchAllDataViaGraphQL(owner: string, repo: string, weeks: number): Promise<ProjectData> {
    // NOTE: This is where the actual logic to construct and execute the
    // GitHub GraphQL API query would reside.
    
    console.log(`Executing GraphQL query for ${owner}/${repo} over ${weeks} weeks.`);

    // Simulate API call success
    return {
        owner: owner,
        repo: repo,
        fullName: `${owner}/${repo}`,
        description: 'Real-time analysis via GitHub GraphQL. Now includes DORA and Team Velocity metrics.',
        stars: 125345,
        primaryLanguage: 'TypeScript',
        avgPrMergeTimeDays: 3.5,

        // Weekly Activity Data
        weeklyCommits: Array.from({ length: weeks }, () => Math.floor(Math.random() * 500)),
        weeklyPrOpened: Array.from({ length: weeks }, () => Math.floor(Math.random() * 80)),
        weeklyPrMerged: Array.from({ length: weeks }, () => Math.floor(Math.random() * 60)),
        weeklyAdditions: Array.from({ length: weeks }, () => Math.floor(Math.random() * 5000)),
        weeklyDeletions: Array.from({ length: weeks }, () => Math.floor(Math.random() * 2000)),
        
        // Complex Data Structures
        languageBreakdown: [
            { name: 'TypeScript', percentage: 70, color: '#3178C6' },
            { name: 'JavaScript', percentage: 20, color: '#F7DF1E' },
            { name: 'CSS', percentage: 10, color: '#563D7C' }
        ],
        triageScore: 85,
        issuePredictionModel: {
            avgTimeToFirstLabelHours: 4.2,
            severity: 'Low',
            nextWeekPredictedIssues: 35,
        },
        
        // NEW FEATURE DATA MOCK
        doraMetrics: {
            deploymentFrequency: '3 times per day',
            leadTimeForChangesHours: 4.8,
            timeToRestoreServiceHours: 0.5,
            changeFailureRate: '5%',
        },
        teamVelocity: {
            currentSprintName: 'Q3 Feature Sprint 2',
            totalStoryPoints: 50,
            completedStoryPoints: 35,
            sprintCompletionPercentage: 70,
        },
        apiStatus: {
            callsMade: 15,
            rateLimitRemaining: 4985,
            rateLimitTotal: 5000,
            resetTime: Date.now() / 1000 + 3600, // Resets in 1 hour
            isRateLimited: false,
        },

        contributors: [
            { user: 'gql-master', avatarUrl: '...', commits: 950, loc_changed: 75000 },
            { user: 'api-architect', avatarUrl: '...', commits: 520, loc_changed: 45000 },
            // ... more contributors
        ]
    };
}

// 3. Feature: Repository Comparison View
// Rationale: Demonstrates sophisticated state management and UI rendering for comparative data.

interface ComparisonState {
    repoA: ProjectData | null;
    repoB: ProjectData | null;
    comparisonKey: 'weeklyCommits' | 'avgPrMergeTimeDays' | 'triageScore' | 'doraMetrics'; // Added 'doraMetrics'
}

const comparisonState: ComparisonState = {
    repoA: null,
    repoB: null,
    comparisonKey: 'weeklyCommits',
};

/**
 * Renders a dual-line chart comparing a specific metric between two repositories.
 */
function renderComparisonChart(key: keyof ProjectData): void {
    if (!comparisonState.repoA || !comparisonState.repoB) return;

    // Logic to update a Chart.js instance using data from repoA and repoB for the given key.
    console.log(`Rendering comparison chart for metric: ${key}`);
    
    // Example: Render commit data side-by-side
    // const dataA = comparisonState.repoA.weeklyCommits;
    // const dataB = comparisonState.repoB.weeklyCommits;
}

// Ensure the main entry point is initialized on load
window.onload = () => {
    // You would use this new function in place of loadRepoMetrics
    // fetchAllDataViaGraphQL('owner', 'repo', 12).then(data => {
    //     // Update UI with the returned ProjectData
    // });
};
