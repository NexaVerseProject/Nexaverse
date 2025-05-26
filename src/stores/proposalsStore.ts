import { create } from 'zustand';
import axiosInstance from '@/lib/axios';

interface Proposal {
  id: number;
  title: string;
  client: string;
  budget?: string;
  duration?: string;
  skills?: string[];
  status: string;
  receivedDate?: string;
  submittedDate?: string;
  expiresIn?: string;
  proposalAmount?: string;
  coverLetter?: string;
  message?: string;
  scheduledTime?: string;
  reason?: string;
}

interface ProposalsState {
  offers: Proposal[];
  invitations: Proposal[];
  activeProposals: Proposal[];
  archivedProposals: Proposal[];
  isLoading: boolean;
  error: string | null;

  // Stats
  stats: {
    activeProposalsCount: number;
    jobOffersCount: number;
    interviewInvitesCount: number;
    successRate: string;
  };

  // Actions
  fetchOffers: () => Promise<void>;
  fetchInvitations: () => Promise<void>;
  fetchActiveProposals: () => Promise<void>;
  fetchArchivedProposals: () => Promise<void>;
  fetchStats: () => Promise<void>;
  acceptOffer: (offerId: number) => Promise<void>;
  declineOffer: (offerId: number) => Promise<void>;
  withdrawProposal: (proposalId: number) => Promise<void>;
  removeArchivedProposal: (proposalId: number) => Promise<void>;
}

const useProposalsStore = create<ProposalsState>((set, get) => ({
  offers: [],
  invitations: [],
  activeProposals: [],
  archivedProposals: [],
  isLoading: false,
  error: null,

  stats: {
    activeProposalsCount: 0,
    jobOffersCount: 0,
    interviewInvitesCount: 0,
    successRate: '0%',
  },

  fetchOffers: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get('/proposals/offers');
      set({
        offers: response.data,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to fetch offers',
        isLoading: false,
      });
    }
  },

  fetchInvitations: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get('/proposals/invitations');
      set({
        invitations: response.data,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to fetch invitations',
        isLoading: false,
      });
    }
  },

  fetchActiveProposals: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get('/proposals/active');
      set({
        activeProposals: response.data,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to fetch active proposals',
        isLoading: false,
      });
    }
  },

  fetchArchivedProposals: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get('/proposals/archived');
      set({
        archivedProposals: response.data,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to fetch archived proposals',
        isLoading: false,
      });
    }
  },

  fetchStats: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get('/proposals/stats');
      set({
        stats: response.data,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to fetch stats',
        isLoading: false,
      });
    }
  },

  acceptOffer: async (offerId: number) => {
    set({ isLoading: true, error: null });
    try {
      await axiosInstance.post(`/proposals/offers/${offerId}/accept`);

      // Remove from offers list after accepting
      const updatedOffers = get().offers.filter(offer => offer.id !== offerId);
      set({
        offers: updatedOffers,
        isLoading: false,
      });

      // Refresh active proposals
      get().fetchActiveProposals();
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to accept offer',
        isLoading: false,
      });
      throw error;
    }
  },

  declineOffer: async (offerId: number) => {
    set({ isLoading: true, error: null });
    try {
      await axiosInstance.post(`/proposals/offers/${offerId}/decline`);

      // Remove from offers list after declining
      const updatedOffers = get().offers.filter(offer => offer.id !== offerId);
      set({
        offers: updatedOffers,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to decline offer',
        isLoading: false,
      });
      throw error;
    }
  },

  withdrawProposal: async (proposalId: number) => {
    set({ isLoading: true, error: null });
    try {
      await axiosInstance.post(`/proposals/${proposalId}/withdraw`);

      // Remove from active proposals
      const updatedProposals = get().activeProposals.filter(
        proposal => proposal.id !== proposalId
      );
      set({
        activeProposals: updatedProposals,
        isLoading: false,
      });

      // Refresh archived proposals
      get().fetchArchivedProposals();
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to withdraw proposal',
        isLoading: false,
      });
      throw error;
    }
  },

  removeArchivedProposal: async (proposalId: number) => {
    set({ isLoading: true, error: null });
    try {
      await axiosInstance.delete(`/proposals/archived/${proposalId}`);

      // Remove from archived list
      const updatedArchived = get().archivedProposals.filter(
        proposal => proposal.id !== proposalId
      );
      set({
        archivedProposals: updatedArchived,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || 'Failed to remove proposal',
        isLoading: false,
      });
      throw error;
    }
  },
}));

export default useProposalsStore;