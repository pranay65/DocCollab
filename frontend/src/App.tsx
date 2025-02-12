import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Share2, 
  Bot, 
  Users, 
  Save,
  LogIn,
  LogOut,
  Plus,
  Edit3,
  Users2,
  Zap
} from 'lucide-react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeDocument, setActiveDocument] = useState('');
  const [documents] = useState([
    { id: 1, title: 'Project Proposal', collaborators: 3 },
    { id: 2, title: 'Meeting Notes', collaborators: 2 },
    { id: 3, title: 'Research Paper', collaborators: 4 },
  ]);

  const features = [
    {
      icon: <Edit3 className="w-6 h-6 text-blue-400" />,
      title: "Real-time Editing",
      description: "Edit documents in real-time with automatic syncing across all collaborators."
    },
    {
      icon: <Users2 className="w-6 h-6 text-purple-400" />,
      title: "Team Collaboration",
      description: "Work together seamlessly with your team members on shared documents."
    },
    {
      icon: <Bot className="w-6 h-6 text-green-400" />,
      title: "AI Assistant",
      description: "Get intelligent suggestions and content generation powered by AI."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Instant Sync",
      description: "Changes are saved and synced instantly across all devices."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 border-b border-gray-700 bg-gray-900/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <FileText className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">DocCollab</span>
            </div>
            <div>
              {isLoggedIn ? (
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition-all duration-300"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              ) : (
                <button
                  onClick={() => setIsLoggedIn(true)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition-all duration-300"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {isLoggedIn ? (
          <div className="grid grid-cols-12 gap-8 py-8">
            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-3 space-y-4">
              <button className="w-full flex items-center space-x-2 px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                <Plus className="w-5 h-5" />
                <span>New Document</span>
              </button>
              
              <div className="bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm border border-gray-700">
                <h2 className="text-lg font-semibold mb-4">Your Documents</h2>
                <div className="space-y-3">
                  {documents.map(doc => (
                    <div
                      key={doc.id}
                      onClick={() => setActiveDocument(doc.title)}
                      className={`p-3 rounded-lg cursor-pointer transition-all duration-300 ${
                        activeDocument === doc.title
                          ? 'bg-blue-500/20 border border-blue-500/50'
                          : 'hover:bg-gray-700/50 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{doc.title}</span>
                        <div className="flex items-center space-x-1 text-gray-400">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">{doc.collaborators}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Editor */}
            <div className="col-span-12 lg:col-span-9">
              <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm border border-gray-700">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <input
                    type="text"
                    placeholder="Document Title"
                    className="w-full sm:w-auto bg-transparent text-2xl font-bold focus:outline-none border-b border-transparent focus:border-blue-500 pb-2 transition-all duration-300"
                    value={activeDocument}
                    onChange={(e) => setActiveDocument(e.target.value)}
                  />
                  <div className="flex flex-wrap items-center gap-3">
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300">
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-300">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
                      <Bot className="w-4 h-4" />
                      <span>AI Assist</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 transition-all duration-300">
                      <Save className="w-4 h-4" />
                      <span>Save</span>
                    </button>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    className="w-full h-[600px] bg-gray-900/50 rounded-lg p-4 resize-none focus:outline-none border border-gray-700 focus:border-blue-500 transition-all duration-300"
                    placeholder="Start typing your document..."
                  ></textarea>
                  <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-sm text-gray-400">
                    <Users className="w-4 h-4" />
                    <span>3 people viewing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="min-h-screen flex flex-col">
            {/* Hero Section */}
            <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Collaborate in Real-Time
              </h1>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl">
                Create, edit, and share documents with your team in real-time. 
                Experience the future of collaborative document editing.
              </p>
              <button
                onClick={() => setIsLoggedIn(true)}
                className="px-8 py-4 text-lg bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-1"
              >
                Get Started for Free
              </button>
              <div className="mt-8 text-gray-500">
                No credit card required • Free plan available
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-16 bg-gray-900/50">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg bg-gray-800/50 border border-gray-700 backdrop-blur-sm hover:border-gray-600 transition-all duration-300"
                >
                  <div className="mb-4 p-3 rounded-lg bg-gray-700/50 w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;