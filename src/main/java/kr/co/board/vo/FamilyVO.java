package kr.co.board.vo;

public class FamilyVO {
    String id;
    String name;
    String relShip;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRelShip() {
        return relShip;
    }

    public void setRelShip(String relShip) {
        this.relShip = relShip;
    }

    @Override
    public String toString() {
        return "FamilyVO{" +
                "name='" + name + '\'' +
                ", relShip='" + relShip + '\'' +
                '}';
    }
}
