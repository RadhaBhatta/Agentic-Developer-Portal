import React from 'react';
import { RepoList } from './features/repositories/RepoList';
import { RepoOverview } from './features/repositories/RepoOverview';
import { AgentDrawer } from './features/agent/AgentDrawer';

function App() {
  return (
    <div className="flex h-screen w-full bg-slate-950 text-slate-100 overflow-hidden">
      {/* Sidebar: Repository Navigation */}
      <aside className="w-80 border-r border-slate-800 flex-shrink-0 bg-slate-900/20">
        <RepoList />
      </aside>

      {/* Main Content: Repository Insights */}
      <main className="flex-1 overflow-y-auto bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black">
        <header className="h-14 border-b border-slate-800/50 flex items-center px-8 bg-slate-950/50 backdrop-blur-md sticky top-0 z-10">
          <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            Agentic Dev Portal <span className="text-indigo-500 mx-2">/</span> Overview
          </div>
        </header>
        
        <RepoOverview />
      </main>

      {/* Slide-out Overlay: Agent Activity */}
      <AgentDrawer />
    </div>
  );
}

export default App;