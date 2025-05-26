import axiosInstance from '@/lib/axios';

export interface Proposal {
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

export interface ProposalStats {
  activeProposalsCount: number;
  jobOffersCount: number;
  interviewInvitesCount: number;
  successRate: string;
}

export interface CreateProposalData {
  jobId: number;
  coverLetter: string;
  proposalAmount: string;
  duration: string;
  attachments?: File[];
}

export interface UpdateProposalData {
  coverLetter?: string;
  proposalAmount?: string;
  duration?: string;
}

class ProposalsService {
  // Fetch all job offers
  async getOffers(): Promise<Proposal[]> {
    const response = await axiosInstance.get('/proposals/offers');
    return response.data;
  }

  // Fetch interview invitations
  async getInvitations(): Promise<Proposal[]> {
    const response = await axiosInstance.get('/proposals/invitations');
    return response.data;
  }

  // Fetch active proposals
  async getActiveProposals(): Promise<Proposal[]> {
    const response = await axiosInstance.get('/proposals/active');
    return response.data;
  }

  // Fetch archived proposals
  async getArchivedProposals(): Promise<Proposal[]> {
    const response = await axiosInstance.get('/proposals/archived');
    return response.data;
  }

  // Fetch proposal statistics
  async getStats(): Promise<ProposalStats> {
    const response = await axiosInstance.get('/proposals/stats');
    return response.data;
  }

  // Get single proposal details
  async getProposalById(id: number): Promise<Proposal> {
    const response = await axiosInstance.get(`/proposals/${id}`);
    return response.data;
  }

  // Create new proposal
  async createProposal(data: CreateProposalData): Promise<Proposal> {
    const formData = new FormData();
    formData.append('jobId', data.jobId.toString());
    formData.append('coverLetter', data.coverLetter);
    formData.append('proposalAmount', data.proposalAmount);
    formData.append('duration', data.duration);

    if (data.attachments) {
      data.attachments.forEach((file) => {
        formData.append('attachments', file);
      });
    }

    const response = await axiosInstance.post('/proposals', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  }

  // Update existing proposal
  async updateProposal(id: number, data: UpdateProposalData): Promise<Proposal> {
    const response = await axiosInstance.put(`/proposals/${id}`, data);
    return response.data;
  }

  // Accept job offer
  async acceptOffer(offerId: number): Promise<void> {
    await axiosInstance.post(`/proposals/offers/${offerId}/accept`);
  }

  // Decline job offer
  async declineOffer(offerId: number): Promise<void> {
    await axiosInstance.post(`/proposals/offers/${offerId}/decline`);
  }

  // Withdraw proposal
  async withdrawProposal(proposalId: number): Promise<void> {
    await axiosInstance.post(`/proposals/${proposalId}/withdraw`);
  }

  // Delete archived proposal
  async deleteArchivedProposal(proposalId: number): Promise<void> {
    await axiosInstance.delete(`/proposals/archived/${proposalId}`);
  }

  // Accept interview invitation
  async acceptInterview(invitationId: number): Promise<void> {
    await axiosInstance.post(`/proposals/invitations/${invitationId}/accept`);
  }

  // Reschedule interview
  async rescheduleInterview(invitationId: number, newTime: string): Promise<void> {
    await axiosInstance.post(`/proposals/invitations/${invitationId}/reschedule`, {
      scheduledTime: newTime,
    });
  }
}

export default new ProposalsService();