package fr.efaya.game.dailyheroes.domain.pojo;

import fr.efaya.game.dailyheroes.controller.api.LootWebServiceController;

import java.util.Date;

/**
 * @author Sahbi Ktifa
 * created on 02/01/2018
 */
public class LootedItem {
    private String lootId;
    private String itemId;
    private String itemName;
    private Integer availableAt;
    private String rarity;
    private LootWebServiceController.ITEM_TYPE itemType;
    private String subType;
    private boolean repeatable;
    private Date rewardDate;
    private Boolean received;

    protected LootedItem() {
    }

    public String getLootId() {
        return lootId;
    }

    public void setLootId(String lootId) {
        this.lootId = lootId;
    }

    public String getItemId() {
        return itemId;
    }

    public void setItemId(String itemId) {
        this.itemId = itemId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public boolean isRepeatable() {
        return repeatable;
    }

    public void setRepeatable(boolean repeatable) {
        this.repeatable = repeatable;
    }

    public LootWebServiceController.ITEM_TYPE getItemType() {
        return itemType;
    }

    public void setItemType(LootWebServiceController.ITEM_TYPE itemType) {
        this.itemType = itemType;
    }

    public String getSubType() {
        return subType;
    }

    public void setSubType(String subType) {
        this.subType = subType;
    }

    public Date getRewardDate() {
        return rewardDate;
    }

    public void setRewardDate(Date rewardDate) {
        this.rewardDate = rewardDate;
    }

    public Boolean getReceived() {
        return received;
    }

    public void setReceived(Boolean received) {
        this.received = received;
    }

    public Integer getAvailableAt() {
        return availableAt;
    }

    public void setAvailableAt(Integer availableAt) {
        this.availableAt = availableAt;
    }

    public String getRarity() {
        return rarity;
    }

    public void setRarity(String rarity) {
        this.rarity = rarity;
    }
}
