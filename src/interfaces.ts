export interface IMode {
    size        :boolean
    rule        :boolean
    count       :number
    players     :IPlayer[]
}

export interface IPlayer {
    readonly id :number
    type        :number
    active      :boolean
    character   :number
}