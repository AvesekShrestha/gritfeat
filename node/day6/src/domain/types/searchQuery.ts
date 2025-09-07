interface ISearchQuery {
    country?: string,
    minFollowers?: number,
    interest?: string,
    profileTheme?: string,
    subscriptionTier?: string,
    page?: number,
    limit?: number
}

export default ISearchQuery

